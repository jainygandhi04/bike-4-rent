// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";
// export default function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_zis0xqq",
//         "template_aqbhj68",
//         e.target,
//         "rKJvlPIG0AD4GKbDI"
//       )
//       .then(
//         (result) => {
//           toast.success("Message sent successfully");
//         },
//         (error) => {
//           toast.error("Somthing went wrong !!");
//         }
//       );
//     e.target.reset();
//   };

//   return (
//     <div id='contact' className='mt-10'>
//       <div className="text-center pt-8 pb-8 font-['Open_Sans']">
//         <h2
//           className='text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900'
//           data-aos='zoom-in'
//           data-aos-duration='1000'
//         >
//           {" "}
//           Let's give a try
//         </h2>
//       </div>
//       <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
//         <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
//           <div>
//             <h2
//               className='text-2xl font-extrabold sm:text-3xl'
//               data-aos='fade-right'
//               data-aos-duration='1000'
//             >
//               Get in touch
//             </h2>

//             <div className='mt-9'>
//               <div className='flex'>
//                 <div className='flex-shrink-0'>
//                   <PhoneIcon
//                     className='w-8 h-8 text-orange'
//                     aria-hidden='true'
//                   />
//                 </div>
//                 <div className='ml-3 text-base'>
//                   <p className='text-2xl font-extrabold'>Phone no</p>
//                   <p>
//                     <a href='tel:9829244434'>9829244434</a>
//                   </p>
//                 </div>
//               </div>
//               <div className='flex mt-6'>
//                 <div className='flex-shrink-0'>
//                   <EnvelopeIcon
//                     className='w-8 h-8 text-orange'
//                     aria-hidden='true'
//                   />
//                 </div>
//                 <div className='ml-3 text-base'>
//                   <p className='text-2xl font-extrabold'>Email</p>
//                   <p className='mt-2'>
//                     <a href='mailto:udaipurtaxihire@gmail.com'>
//                     udaipurtaxihire@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
//               <div className='flex mt-6'>
//                 <div className='flex-shrink-0'>
//                   <MapPinIcon
//                     className='w-8 h-8 text-orange'
//                     aria-hidden='true'
//                   />
//                 </div>
//                 <div className='ml-3 text-base'>
//                   <p className='text-2xl font-extrabold'>Location</p>
//                   <div className='text-base'>
//                     <p className='mt-1'>Udaipur, Rajasthan</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='mt-12 sm:mt-16 md:mt-0'>
//             <div className='text-center'>
//               <h2
//                 className='pb-12 text-3xl font-extrabold tracking-tight sm:text-4xl'
//                 data-aos='fade-left'
//                 data-aos-duration='1000'
//               >
//                 {" "}
//                 Message us
//               </h2>
//             </div>
//             <form
//               onSubmit={sendEmail}
//               className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 align-right'
//             >
//               <div>
//                 <label
//                   htmlFor='user_firstname'
//                   className='block text-sm font-medium'
//                 >
//                   First name
//                 </label>
//                 <div className='mt-1'>
//                   <input
//                     type='text'
//                     name='user_firstname'
//                     id='user_firstname'
//                     autoComplete='given_name'
//                     required
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='user_lastname'
//                   className='block text-sm font-medium'
//                 >
//                   Last name
//                 </label>
//                 <div className='mt-1'>
//                   <input
//                     type='text'
//                     name='user_lastname'
//                     id='lastname'
//                     required
//                     autoComplete='family_name'
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                   />
//                 </div>
//               </div>
//               <div className='sm:col-span-2'>
//                 <label htmlFor='email' className='block text-sm font-medium'>
//                   Email
//                 </label>
//                 <div className='mt-1'>
//                   <input
//                     id='email'
//                     name='user_email'
//                     type='email'
//                     autoComplete='email'
//                     required
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                   />
//                 </div>
//               </div>

//               <div className='sm:col-span-2'>
//                 <label htmlFor='message' className='block text-sm font-medium'>
//                   Message
//                 </label>
//                 <div className='mt-1'>
//                   <textarea
//                     id='message'
//                     name='message'
//                     rows={4}
//                     required
//                     className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//               <div className='sm:col-span-2'>
//                 <button
//                   type='submit'
//                   className='inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-orange hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//                   formTarget='_blank'
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      axios.post("/api/v1/contact", values);

      toast.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      toast.error("Something went wrong while sending the message.");
    }
  };

  return (
    <div id='contact' className='mt-10 px-6 max-w-7xl mx-auto'>
      <div className='text-center pb-12'>
        <Title level={2}>Let's give a try</Title>
      </div>
      <Row gutter={32}>
        <Col xs={24} md={12}>
          <Title level={3}>Get in touch</Title>
          <div className='mt-6 space-y-6'>
            <div className='flex items-start gap-3'>
              <PhoneOutlined className='text-2xl text-orange-500' />
              <div>
                <Paragraph strong>Phone No</Paragraph>
                <a href='tel:9829244434'>9829244434</a>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <MailOutlined className='text-2xl text-orange-500' />
              <div>
                <Paragraph strong>Email</Paragraph>
                <a href='mailto:udaipurtaxihire@gmail.com'>udaipurtaxihire@gmail.com</a>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <EnvironmentOutlined className='text-2xl text-orange-500' />
              <div>
                <Paragraph strong>Location</Paragraph>
                <Paragraph>Udaipur, Rajasthan</Paragraph>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <Title level={3} className='text-center pb-6'>
            Message us
          </Title>
          <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            autoComplete='off'
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='firstname'
                  label='First Name'
                  rules={[{ required: true, message: 'Please enter your first name' }]}
                >
                  <Input placeholder='First name' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='lastname'
                  label='Last Name'
                  rules={[{ required: true, message: 'Please enter your last name' }]}
                >
                  <Input placeholder='Last name' />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name='email'
              label='Email'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder='Email address' />
            </Form.Item>

            <Form.Item
              name='message'
              label='Message'
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} placeholder='Your message' />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' className='bg-orange-500 hover:bg-orange-600'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
