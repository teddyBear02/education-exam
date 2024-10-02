import React from "react";
import { Button, Col, Form, Input, Row, notification } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { useAppDispatch } from "@/store";
import { login } from "@/store/auth/auth.actions";
import { PayloadLogin } from "@/models";
import { unwrapResult } from "@reduxjs/toolkit";

const cx = classNames.bind(styles);

const FormLogin = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const clickToRegister = () => {
    router.push("/auth/register");
  };

  const handleLogin = (payload: PayloadLogin) => {
    dispatch(login(payload))
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: "Login success !",
        });
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
        notification.error({
          message: error.message,
        });
      });
  };

  return (
    <>
      <Row className={cx(["form-auth"])} gutter={24}>
        <Col span={12}>
          <Row justify={"center"}>
            <Image
              className={cx(["image-auth"])}
              alt=""
              src={"/assets/signin-image.jpg"}
              width={280}
              height={360}
            />

            <span className={cx(["link-to"])} onClick={clickToRegister}>
              Create an account
            </span>
          </Row>
        </Col>

        <Col span={12}>
          <h1 className={cx(["heading-auth"])}>Login</h1>
          <Form
            className={cx(["form-login"])}
            onFinish={(values) => {
              handleLogin(values);
            }}
          >
            <div className={cx(["form-group"])}>
              <label htmlFor="accountName" className={cx(["label-auth"])}>
                <FaUser />
              </label>
              <Form.Item name={"email"}>
                <Input
                  name="accountName"
                  className={cx(["input-auth"])}
                  placeholder={`Your name account`}
                />
              </Form.Item>
            </div>

            <div className={cx(["form-group"])}>
              <label htmlFor="password" className={cx(["label-auth"])}>
                <CiLock size={18} />
              </label>
              <Form.Item name={"password"}>
                <Input
                  name="password"
                  type="password"
                  className={cx(["input-auth"])}
                  placeholder={`Password`}
                />
              </Form.Item>
            </div>

            <br />
            <Button className={cx(["button-auth"])} htmlType="submit">
              Login
            </Button>
          </Form>

          {/* other login here */}
        </Col>
      </Row>
    </>
  );
};

export default FormLogin;
