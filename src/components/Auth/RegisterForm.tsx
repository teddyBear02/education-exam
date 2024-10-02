import React from "react";
import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import { Button, Col, Form, Input, Row, notification } from "antd/lib";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { signUp } from "@/store/auth/auth.actions";
import { useAppDispatch } from "@/store";
import { PayloadSignUp } from "@/models";
import { unwrapResult } from "@reduxjs/toolkit";
import { RoleDataType } from "@/models/store/user.type";

const cx = classNames.bind(styles);

const RegisterLogin = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { Item } = Form;

  const clickToLogin = () => {
    router.push("/auth/login");
  };

  const handleRegister = (payload: PayloadSignUp) => {
    dispatch(
      signUp({
        email: payload.email,
        password: payload.password,
        name: payload.name,
        role: RoleDataType.USER,
      })
    )
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: "Sign up successfully !",
        });
        router.push("/auth/login");
      })
      .catch((error) => {
        notification.error({
          message: `${error.message}`,
        });
        console.log(error);
      });
  };

  return (
    <>
      <Row className={cx(["form-auth"])} gutter={24}>
        <Col span={12}>
          <h1 className={cx(["heading-auth"])}>Register</h1>
          <Form
            className={cx(["form-login"])}
            onFinish={(value) => {
              handleRegister(value);
              console.log(value);
            }}
          >
            <div className={cx(["form-group"])}>
              <label htmlFor="name" className={cx(["label-auth"])}>
                <FaUser />
              </label>

              <Item
                name="name"
                className={cx(["item-register"])}
                rules={[
                  {
                    required: true,
                    message: "Enter your name !",
                  },
                ]}
              >
                <Input
                  className={cx(["input-auth"])}
                  placeholder={`Your name account`}
                />
              </Item>
            </div>

            <div className={cx(["form-group"])}>
              <label htmlFor="email" className={cx(["label-auth"])}>
                <IoIosMail size={18} />
              </label>
              <Item
                name="email"
                className={cx(["item-register"])}
                rules={[
                  {
                    required: true,
                    message: "Enter your email !",
                  },
                ]}
              >
                <Input
                  className={cx(["input-auth"])}
                  placeholder={`Your email`}
                />
              </Item>
            </div>

            <div className={cx(["form-group"])}>
              <label htmlFor="password" className={cx(["label-auth"])}>
                <IoIosLock size={18} />
              </label>

              <Item
                name="password"
                className={cx(["item-register"])}
                rules={[
                  {
                    required: true,
                    message: "Enter your password !",
                  },
                ]}
              >
                <Input
                  className={cx(["input-auth"])}
                  placeholder={`Password`}
                  type="password"
                />
              </Item>
            </div>

            <div className={cx(["form-group"])}>
              <label htmlFor="passwordAgain" className={cx(["label-auth"])}>
                <CiLock size={18} />
              </label>
              <Item
                name="passwordAgain"
                className={cx(["item-register"])}
                rules={[
                  {
                    required: true,
                    message: "Please enter password again !",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The password again not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input
                  className={cx(["input-auth"])}
                  placeholder={`Repeat your password`}
                  type="password"
                />
              </Item>
            </div>

            <br />
            <Button className={cx(["button-auth"])} htmlType="submit">
              Login
            </Button>
          </Form>

          {/* other login here */}
        </Col>

        <Col span={12}>
          <Row justify={"center"}>
            <Image
              className={cx(["image-auth"])}
              alt=""
              src={"/assets/signup-image.jpg"}
              width={`${280}`}
              height={360}
            />

            <span className={cx(["link-to"])} onClick={clickToLogin}>
              I am already have account
            </span>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RegisterLogin;
