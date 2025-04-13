import { useEffect, useState } from 'react';
import { Table, Button, Modal, Input, message as antMessage } from 'antd';
import axios from 'axios';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [replyModalVisible, setReplyModalVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

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
