import React from "react";
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';




const QuestionForm = (props) => {

    return (

        <Form.List name="questions"

        >
            {() => {
                return (

                    <div>

                        <Form.Item
                            name={[props.id, "question"]}

                            label="Question"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Question " />
                        </Form.Item>

                        <Form.Item
                            name={[props.id, "answer"]}


                            label="Answers"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Answer " />
                        </Form.Item>

                        <Form.List
                            name={[props.id, "choices"]}
                        >
                            {(fields, { add, remove }) => (
                                <div>
                                    {fields.map((field, index) => (
                                        <Space key={field.key} align="baseline">

                                            <Form.Item
                                                name={[index]}
                                                noStyle

                                                label="Choices"
                                                rules={[{ required: true }]}
                                            >
                                                <Input placeholder="Choices " />
                                            </Form.Item>


                                            <MinusCircleOutlined onClick={() => remove(field.name)} />
                                        </Space>
                                    ))}

                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add an answer choice
                            </Button>
                                    </Form.Item>
                                </div>
                            )}
                        </Form.List>

                    </div>
                );
            }}
        </Form.List>
    );

}

export default QuestionForm;


