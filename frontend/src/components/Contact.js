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





// import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
// import { Button, Col, Form, Input, Row, Typography } from "antd";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const { Title, Paragraph } = Typography;

// export default function Contact() {
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       axios.post("/api/v1/contact", values);

//       toast.success("Message sent successfully!");
//       form.resetFields();
//     } catch (error) {
//       toast.error("Something went wrong while sending the message.");
//     }
//   };

//   return (
//     <div id='contact' className='mt-10 px-6 max-w-7xl mx-auto'>
//       <div className='text-center pb-12'>
//         <Title level={2}>Let's give a try</Title>
//       </div>
//       <Row gutter={32}>
//         <Col xs={24} md={12}>
//           <Title level={3}>Get in touch</Title>
//           <div className='mt-6 space-y-6'>
//             <div className='flex items-start gap-3'>
//               <PhoneOutlined className='text-2xl text-orange-500' />
//               <div>
//                 <Paragraph strong>Phone No</Paragraph>
//                 <a href='tel:9829244434'>9829244434</a>
//               </div>
//             </div>
//             <div className='flex items-start gap-3'>
//               <MailOutlined className='text-2xl text-orange-500' />
//               <div>
//                 <Paragraph strong>Email</Paragraph>
//                 <a href='mailto:udaipurtaxihire@gmail.com'>udaipurtaxihire@gmail.com</a>
//               </div>
//             </div>
//             <div className='flex items-start gap-3'>
//               <EnvironmentOutlined className='text-2xl text-orange-500' />
//               <div>
//                 <Paragraph strong>Location</Paragraph>
//                 <Paragraph>Udaipur, Rajasthan</Paragraph>
//               </div>
//             </div>
//           </div>
//         </Col>

//         <Col xs={24} md={12}>
//           <Title level={3} className='text-center pb-6'>
//             Message us
//           </Title>
//           <Form
//             form={form}
//             layout='vertical'
//             onFinish={onFinish}
//             autoComplete='off'
//           >
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Form.Item
//                   name='firstname'
//                   label='First Name'
//                   rules={[{ required: true, message: 'Please enter your first name' }]}
//                 >
//                   <Input placeholder='First name' />
//                 </Form.Item>
//               </Col>
//               <Col span={12}>
//                 <Form.Item
//                   name='lastname'
//                   label='Last Name'
//                   rules={[{ required: true, message: 'Please enter your last name' }]}
//                 >
//                   <Input placeholder='Last name' />
//                 </Form.Item>
//               </Col>
//             </Row>

//             <Form.Item
//               name='email'
//               label='Email'
//               rules={[
//                 { required: true, message: 'Please enter your email' },
//                 { type: 'email', message: 'Please enter a valid email' },
//               ]}
//             >
//               <Input placeholder='Email address' />
//             </Form.Item>

//             <Form.Item
//               name='message'
//               label='Message'
//               rules={[{ required: true, message: 'Please enter your message' }]}
//             >
//               <Input.TextArea rows={4} placeholder='Your message' />
//             </Form.Item>

//             <Form.Item>
//               <Button type='primary' htmlType='submit' className='bg-orange-500 hover:bg-orange-600'>
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </Col>
//       </Row>
//     </div>
//   );
// }




// import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
// import { Button, Col, Form, Input, Row, Typography } from "antd";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useEffect, useState } from "react";

// const { Title, Paragraph } = Typography;

// export default function Contact() {
//   const [animate, setAnimate] = useState(false);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const onFinish = async (values) => {
//     try {
//       await axios.post("/api/v1/contact", values);
//       toast.success("Message sent successfully!");
//       form.resetFields();
//     } catch (error) {
//       toast.error("Something went wrong while sending the message.");
//     }
//   };

//   return (
//     <div
//       id="contact"
//       className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen"
//     >
//       {/* Header */}
//       <div
//         className={`text-center pt-8 pb-8 font-['Open_Sans'] transform transition-all duration-700 ${
//           animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <h2 className="text-4xl font-extrabold tracking-tight text-[#733F30]">
//           Get in Touch with Us
//         </h2>
//         <p className="text-[#5a4239] mt-2">
//           We'd love to hear from you! Reach out with any questions.
//         </p>
//       </div>

//       {/* Content */}
//       <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div
//             className={`bg-[#fff7f0] p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
//               animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <Title level={3} className="text-2xl font-bold text-[#733F30]">
//               Contact Info
//             </Title>
//             <Paragraph className="text-[#5a4239] mt-2">
//               Have questions? We're here to help!
//             </Paragraph>
//             <div className="mt-6 space-y-6">
//               {/* Phone */}
//               <div className="flex items-center">
//                 <PhoneOutlined className="text-orange-800 text-2xl mr-4 hover:text-[#A15E48] transition-all duration-300" />
//                 <div>
//                   <Paragraph strong className="text-lg text-[#733F30]">
//                     Phone
//                   </Paragraph>
//                   <a
//                     href="tel:9829244434"
//                     className="text-[#5a4239] hover:text-[#A15E48]"
//                   >
//                     +91 98292 44434
//                   </a>
//                 </div>
//               </div>
//               {/* Email */}
//               <div className="flex items-center">
//                 <MailOutlined className="text-orange-800 text-2xl mr-4 hover:text-[#A15E48] transition-all duration-300" />
//                 <div>
//                   <Paragraph strong className="text-lg text-[#733F30]">
//                     Email
//                   </Paragraph>
//                   <a
//                     href="mailto:udaipurtaxihire@gmail.com"
//                     className="text-[#5a4239] hover:text-[#A15E48]"
//                   >
//                     udaipurtaxihire@gmail.com
//                   </a>
//                 </div>
//               </div>
//               {/* Location */}
//               <div className="flex items-center">
//                 <EnvironmentOutlined className="text-orange-800 text-2xl mr-4 hover:text-[#A15E48] transition-all duration-300" />
//                 <div>
//                   <Paragraph strong className="text-lg text-[#733F30]">
//                     Location
//                   </Paragraph>
//                   <Paragraph className="text-[#5a4239]">Udaipur, Rajasthan</Paragraph>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div
//             className={`bg-[#fff7f0] p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
//               animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//             }`}
//           >
//             <Title level={3} className="text-2xl font-bold text-[#733F30] text-center">
//               Message Us
//             </Title>
//             <Form
//               form={form}
//               layout="vertical"
//               onFinish={onFinish}
//               autoComplete="off"
//               className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
//             >
//               <Row gutter={16} className="w-full">
//                 <Col span={24} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
//                   <Form.Item
//                     name="firstname"
//                     label="First Name"
//                     rules={[{ required: true, message: 'Please enter your first name' }]}
//                     className="mb-0"
//                   >
//                     <Input 
//                       placeholder="First name" 
//                       className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                     />
//                   </Form.Item>
//                   <Form.Item
//                     name="lastname"
//                     label="Last Name"
//                     rules={[{ required: true, message: 'Please enter your last name' }]}
//                     className="mb-0"
//                   >
//                     <Input 
//                       placeholder="Last name" 
//                       className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>

//               <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[
//                   { required: true, message: 'Please enter your email' },
//                   { type: 'email', message: 'Please enter a valid email' },
//                 ]}
//                 className="sm:col-span-2 mb-0"
//               >
//                 <Input 
//                   placeholder="Email address" 
//                   className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="message"
//                 label="Message"
//                 rules={[{ required: true, message: 'Please enter your message' }]}
//                 className="sm:col-span-2 mb-0"
//               >
//                 <Input.TextArea 
//                   rows={4} 
//                   placeholder="Your message" 
//                   className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                 />
//               </Form.Item>

//               <Form.Item className="sm:col-span-2 mb-0">
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="w-full px-6 py-3 text-white bg-orange-800 hover:bg-[#8B4D3A] rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300 h-auto"
//                 >
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { Button, Col, Form, Input, Row, Typography } from "antd";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

// const { Title, Paragraph } = Typography;

// export default function Contact() {
//   const [animate, setAnimate] = useState(false);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const onFinish = async (values) => {
//     try {
//       await axios.post("/api/v1/contact", values);
//       toast.success("Message sent successfully!");
//       form.resetFields();
//     } catch (error) {
//       toast.error("Something went wrong while sending the message.");
//     }
//   };

//   return (
//     <div
//       id="contact"
//       className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen"
//     >
//       {/* Header */}
//       {/* <div
//         className={`text-center pt-8 pb-8 font-['Open_Sans'] transform transition-all duration-700 ${
//           animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <h2 className="text-4xl font-extrabold tracking-tight text-[#733F30]">
//           Get in Touch with Us
//         </h2>
//         <p className="text-[#5a4239] mt-2">
//           We'd love to hear from you! Reach out with any questions.
//         </p>
//       </div> */}
//             <div
//         className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
//           animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         } flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg`}
//       >
//         {/* Heading */}
//         <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
//           <FontAwesomeIcon icon={faPhoneVolume} className="text-orange-800 mr-2" />
//           Get in Touch with Us
//         </h2>
        
//         {/* Subtext */}
//         <p
//           className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
//             animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//             We'd love to hear from you! Reach out with any questions.
//         </p>
//       </div>

//       {/* Content */}
//       <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div
//             className={`bg-[#F0C8B0] p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
//               animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <Title level={3} className="text-2xl font-bold text-[#733F30]">
//               Contact Info
//             </Title>
//             <Paragraph className="text-[#5a4239] mt-2">
//               Have questions? We're here to help!
//             </Paragraph>
//             <div className="mt-6 space-y-6">
//               {/* Phone */}
//               <div className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faPhone}
//                   className="text-orange-800 w-6 h-6 mr-4 hover:text-[#A15E48] transition-all duration-300"
//                 />
//                 <div>
//                   <Paragraph strong className="text-lg text-[#733F30]">
//                     Phone
//                   </Paragraph>
//                   <a
//                     href="tel:9829244434"
//                     className="text-[#5a4239] hover:text-[#A15E48]"
//                   >
//                     +91 98292 44434
//                   </a>
//                 </div>
//               </div>
//               {/* Email */}
//               <div className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="text-orange-800 w-6 h-6 mr-4 hover:text-[#A15E48] transition-all duration-300"
//                 />
//                 <div>
//                   <Paragraph strong className="text-lg text-[#733F30]">
//                     Email
//                   </Paragraph>
//                   <a
//                     href="mailto:udaipurtaxihire@gmail.com"
//                     className="text-[#5a4239] hover:text-[#A15E48]"
//                   >
//                     udaipurtaxihire@gmail.com
//                   </a>
//                 </div>
//               </div>
//               {/* Location */}
//               <div className="flex items-center">
//                 <FontAwesomeIcon
//                   icon={faLocationDot}
//                   className="text-orange-800 w-6 h-6 mr-4 hover:text-[#A15E48] transition-all duration-300"
//                 />
//                 <div>
//                   <Paragraph strong className="text-lg text-[#733F30]">
//                     Location
//                   </Paragraph>
//                   <Paragraph className="text-[#5a4239]">Udaipur, Rajasthan</Paragraph>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form (Ant Design) */}
//           <div
//             className={`bg-[#F0C8B0] p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
//               animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//             }`}
//           >
//             <Title level={3} className="text-2xl font-bold text-[#733F30] text-center">
//               Message Us
//             </Title>
//             <Form
//               form={form}
//               layout="vertical"
//               onFinish={onFinish}
//               autoComplete="off"
//               className="mt-6"
//             >
//               <Row gutter={16}>
//                 <Col span={12}>
//                   <Form.Item
//                     name="firstname"
//                     label="First Name"
//                     rules={[{ required: true, message: 'Please enter your first name' }]}
//                   >
//                     <Input 
//                       placeholder="First name" 
//                       className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="lastname"
//                     label="Last Name"
//                     rules={[{ required: true, message: 'Please enter your last name' }]}
//                   >
//                     <Input 
//                       placeholder="Last name" 
//                       className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>

//               <Form.Item
//                 name="email"
//                 label="Email"
//                 rules={[
//                   { required: true, message: 'Please enter your email' },
//                   { type: 'email', message: 'Please enter a valid email' },
//                 ]}
//               >
//                 <Input 
//                   placeholder="Email address" 
//                   className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                 />
//               </Form.Item>

//               <Form.Item
//                 name="message"
//                 label="Message"
//                 rules={[{ required: true, message: 'Please enter your message' }]}
//               >
//                 <Input.TextArea 
//                   rows={4} 
//                   placeholder="Your message" 
//                   className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
//                 />
//               </Form.Item>

//               <Form.Item>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="w-full px-6 py-3 text-white bg-orange-800 hover:bg-[#8B4D3A] rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300 h-auto"
//                 >
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const { Title, Paragraph } = Typography;

export default function Contact() {
  const [animate, setAnimate] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const onFinish = async (values) => {
    try {
      await axios.post("/api/v1/contact", values);
      toast.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      toast.error("Something went wrong while sending the message.");
    }
  };

  return (
    <div
      id="contact"
      className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen"
    >
      {/* Header */}
      <div
        className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } flex flex-col items-center space-y-4 px-4 sm:p-6 rounded-lg shadow-lg`}
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-orange-900">
          <FontAwesomeIcon icon={faPhoneVolume} className="text-orange-800 mr-2" />
          Get in Touch with Us
        </h2>
        
        {/* Subtext */}
        <p
          className={`text-[#5a4239] text-base sm:text-lg mt-2 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We'd love to hear from you! Reach out with any questions.
        </p>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 py-8 sm:py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <div
            className={`bg-[#F0C8B0] p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Title level={3} className="text-xl sm:text-2xl font-bold text-[#733F30]">
              Contact Info
            </Title>
            <Paragraph className="text-[#5a4239] mt-2">
              Have questions? We're here to help!
            </Paragraph>
            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-orange-800 w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 mt-1 hover:text-[#A15E48] transition-all duration-300"
                />
                <div>
                  <Paragraph strong className="text-base sm:text-lg text-[#733F30]">
                    Phone
                  </Paragraph>
                  <a
                    href="tel:9829244434"
                    className="text-[#5a4239] hover:text-[#A15E48] text-sm sm:text-base"
                  >
                    +91 98292 44434
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-orange-800 w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 mt-1 hover:text-[#A15E48] transition-all duration-300"
                />
                <div>
                  <Paragraph strong className="text-base sm:text-lg text-[#733F30]">
                    Email
                  </Paragraph>
                  <a
                    href="mailto:udaipurtaxihire@gmail.com"
                    className="text-[#5a4239] hover:text-[#A15E48] text-sm sm:text-base break-all"
                  >
                    udaipurtaxihire@gmail.com
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-orange-800 w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 mt-1 hover:text-[#A15E48] transition-all duration-300"
                />
                <div>
                  <Paragraph strong className="text-base sm:text-lg text-[#733F30]">
                    Location
                  </Paragraph>
                  <Paragraph className="text-[#5a4239] text-sm sm:text-base">Udaipur, Rajasthan</Paragraph>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Ant Design) */}
          <div
            className={`bg-[#F0C8B0] p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-700 hover:bg-[#fde9dc] hover:shadow-xl ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Title level={3} className="text-xl sm:text-2xl font-bold text-[#733F30] text-center">
              Message Us
            </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              className="mt-4 sm:mt-6"
            >
              <Row gutter={[16, 8]}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="firstname"
                    label="First Name"
                    rules={[{ required: true, message: 'Please enter your first name' }]}
                  >
                    <Input 
                      placeholder="First name" 
                      className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[{ required: true, message: 'Please enter your last name' }]}
                  >
                    <Input 
                      placeholder="Last name" 
                      className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input 
                  placeholder="Email address" 
                  className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea 
                  rows={4} 
                  placeholder="Your message" 
                  className="w-full border-[#DCA689] rounded-md shadow-sm focus:ring-orange-800 focus:border-orange-800"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full px-4 py-2 sm:px-6 sm:py-3 text-white bg-orange-800 hover:bg-[#8B4D3A] rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-800 transition-all duration-300 h-auto"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}