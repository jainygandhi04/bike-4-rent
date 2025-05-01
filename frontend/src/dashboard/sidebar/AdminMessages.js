import { useEffect, useState } from 'react';
import { Table, Button, Modal, Input, message as antMessage } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [replyModalVisible, setReplyModalVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/v1/contact/admin/messages')
      .then(res => setMessages(res.data));
  }, []);

  const handleReply = (msg) => {
    setSelectedMessage(msg);
    setReplyText(msg.adminReply || '');
    setReplyModalVisible(true);
  };

  const submitReply = () => {
    axios.post(`/api/v1/contact/admin/reply/${selectedMessage._id}`, { reply: replyText })
      .then(() => {
        antMessage.success('Reply sent!');
        setReplyModalVisible(false);
        setMessages(prev =>
          prev.map(msg => msg._id === selectedMessage._id
            ? { ...msg, adminReply: replyText, repliedAt: new Date() }
            : msg)
        );
      });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Subject', dataIndex: 'subject' },
    { title: 'Message', dataIndex: 'message' },
    { title: 'Replied', dataIndex: 'adminReply', render: (reply) => reply ? 'Yes' : 'No' },
    {
      title: 'Action',
      render: (_, record) => (
        <Button onClick={() => handleReply(record)} type="primary">Reply</Button>
      )
    }
  ];

  return (
    <>
      <Table columns={columns} dataSource={messages} rowKey="_id" />
      <button
        onClick={() => navigate('/admin')}
        style={{
          position: 'absolute',
          top: '10px',
          left: '1200px',
          backgroundColor: '#A15E48',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #A15E48',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
          marginBottom: '20px'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back To Dashboard
      </button>

      <Modal
        title="Reply to User"
        open={replyModalVisible}
        onOk={submitReply}
        onCancel={() => setReplyModalVisible(false)}
      >
        <p><strong>Message:</strong> {selectedMessage?.message}</p>
        <Input.TextArea
          rows={4}
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Type your reply here..."
        />
      </Modal>
    </>
  );
};

export default AdminMessages;
