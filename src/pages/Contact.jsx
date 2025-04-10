import React from 'react'
import { Card, Form, Input, Button, Typography } from "antd"
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons"
import postContact from '../service/postContact'

const { Title } = Typography
const { TextArea } = Input

const Contact = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    postContact("/", values)
    form.resetFields()
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <Title level={2} className="mb-6">Contact Us</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <Title level={4}>Contact Information</Title>
          <div className="space-y-4 mt-4">
            <div className="flex items-start">
              <EnvironmentOutlined className="text-gray-500 text-lg mt-1 mr-3" />
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-gray-500">Tashkent region, Zangiata district, Arkbulak customs post, office 206</p>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneOutlined className="text-gray-500 text-lg mt-1 mr-3" />
              <div className="flex flex-col">
                <p className="font-medium">Phone:</p>
                <a href="tel:+998934057755" className="text-gray-300 hover:text-white transition-colors">+998 93 405 77 55</a>
                <a href="tel:+998975417755" className="text-gray-300 hover:text-white transition-colors">+998 97 541 77 55</a>
              </div>
            </div>
            <div className="flex items-start">
              <MailOutlined className="text-gray-500 text-lg mt-1 mr-3" />
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-500">info@example.com</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-medium mb-2">Follow us:</p>
              <div className="flex space-x-2">
                <Button icon={<InstagramOutlined />} href="https://www.instagram.com/irbis_us/" target="_blank" shape="circle" />
                <Button icon={<LinkedinOutlined />} href="https://www.linkedin.com/company/105728056/admin/dashboard/" target="_blank" shape="circle" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <Title level={4}>Send us a message</Title>
          <Form form={form} layout="vertical" onFinish={onFinish} className="mt-4">
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input placeholder="Your name" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Please enter a valid email" }]}>
              <Input placeholder="Your email" />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}>
              <TextArea placeholder="Your message" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">Send Message</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>

      <div className="mt-10 h-[400px] w-full rounded bg-gray-100 flex items-center justify-center text-gray-500">
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000.9422951872534!2d69.13865207605132!3d41.22302797132128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzJzIyLjkiTiA2OcKwMDgnMjguNCJF!5e0!3m2!1sru!2s!4v1735909602268!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact