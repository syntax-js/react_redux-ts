import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Steps,
  Select,
  Rate,
  DatePicker,
  Popconfirm,
  notification,
} from "antd";
import { StarOutlined, RadiusUprightOutlined } from "@ant-design/icons";

const { Step } = Steps;
const { RangePicker } = DatePicker;
const { Option } = Select;

const TaskForm = () => {
  const customIcons: any = {
    1: <StarOutlined />,
    2: <StarOutlined />,
    3: <StarOutlined />,
    4: <StarOutlined />,
    5: <StarOutlined />,
  };

  const [current, setCurrent] = useState(0);

  const stepHandler = (current: any) => {
    console.log(current, "curret Logiigg");
    setCurrent(current);
  };

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { offset: 2 },
  };

  const tailLayout = {
    wrapperCol: { offset: 22 },
  };

  const layout1 = {
    labelCol: { span: 3 },
    wrapperCol: { offset: 2 },
  };

  const tailLayout1 = {
    wrapperCol: { offset: 22 },
  };

  const layout2 = {
    labelCol: { span: 6 },
    wrapperCol: { offset: 2 },
  };

  const tailLayout2 = {
    wrapperCol: { offset: 22 },
  };

  const nextHandler = () => {
    console.log("Hello");
  };

  const openNotification = () => {
    notification.success({
      message: "Thanks mate!",
      description:
        "We are submitting your task list to your project manager & team leader. Once you get approval, you start working on it.",
    });
  };

  return (
    <div
      className="site-card-border-less-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      <Card
        title="Add Task:"
        bordered={true}
        style={{
          width: "60%",
        }}
      >
        <Steps current={current} onChange={stepHandler}>
          <Step title="Choose a Project"></Step>
          <Step title="Add a Task" />
          <Step title="Submit for Approval" />
        </Steps>

        {current == 0 && (
          <Form
            {...layout}
            initialValues={{ remember: true }}
            name="basic"
            style={{ marginTop: "50px" }}
          >
            <Form.Item
              label="Fullname"
              name="Fullname"
              rules={[
                { required: true, message: "Please input your fullname" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Project"
              label="Project"
              rules={[
                { required: true, message: "Please choose your project" },
              ]}
            >
              <Select
                placeholder="Choose a project"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="male">RKI</Option>
                <Option value="female">TVTOB</Option>
                <Option value="other">PADWAN</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" onClick={nextHandler}>
                Next
              </Button>
            </Form.Item>
          </Form>
        )}

        {current == 1 && (
          <Form
            {...layout1}
            initialValues={{ remember: true }}
            name="basic"
            style={{ marginTop: "50px" }}
          >
            <Form.Item
              label="Description"
              name="Description"
              rules={[
                { required: true, message: "Please input your description" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="Date & Time"
              label="Date & Time"
              rules={[
                {
                  required: true,
                  message: "Please date & time for the task",
                },
              ]}
            >
              <RangePicker showTime />
            </Form.Item>
            <Form.Item
              name="Project"
              label="Level of Diffculty:"
              rules={[
                {
                  required: true,
                  message: "Please choose your diffculty Level",
                },
              ]}
            >
              <Rate
                defaultValue={3}
                character={({ index }: any) => {
                  return customIcons[index + 1];
                }}
              />
            </Form.Item>
            <Form.Item {...tailLayout1}>
              <Button type="primary" onClick={nextHandler}>
                Next
              </Button>
            </Form.Item>
          </Form>
        )}

        {current == 2 && (
          <Form
            {...layout2}
            initialValues={{ remember: true }}
            name="basic"
            style={{ marginTop: "50px" }}
          >
            <Form.Item
              label="Choose your Team Leader"
              name="Description"
              rules={[
                { required: true, message: "Please input your team leader" },
              ]}
            >
              <Select
                placeholder="Choose a team leader"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="male">SenthilKumaran</Option>
                <Option value="female">Sridar</Option>
                <Option value="other">Angappan</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Choose your Project Manager"
              name="project mananger"
              rules={[
                {
                  required: true,
                  message: "Please input your project manager",
                },
              ]}
            >
              <Select
                placeholder="Choose a project Manager"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="male">Rajkumar</Option>
                <Option value="female">Nakeran</Option>
                <Option value="other">Sridar</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout2}>
              <Popconfirm
                placement="rightTop"
                title={"Can we submit the task?"}
                onConfirm={openNotification}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" onClick={nextHandler}>
                  Submit
                </Button>
              </Popconfirm>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default TaskForm;
