"use client";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../src/header/header";
import { useSearchParams } from "next/navigation";
import * as webllm from "@mlc-ai/web-llm";
import { categoryConfig } from "../src/category-config";
import { useRef, useState } from "react";
import Avatar from "../src/avatar";

export interface ChatMessage {
  name: string;
  image: string;
  message: string;
  user: boolean;
}
export default function Chat() {
  let chatReady = false;
  let messages: ChatMessage[] = [];
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("id");
  const categoryId = searchParams.get("category");
  const item = categoryId
    ? (categoryConfig as any)[categoryId][Number(serviceId)]
    : null;
  function setLabel(id: string, progress: number) {
    const label = document.getElementById("progress");
    if (label)
      label.innerHTML = `<h2>Initializing Chat</h2><p>We're installing the chat application. This can take a while the first time.</p><p>So leave this open and grab a coffee</p><p class="percentage">${progress}% completed</p>`;
  }
  // Use a chat worker client instead of ChatModule here
  const chat = new webllm.ChatWorkerClient(
    new Worker(new URL("./worker.ts", import.meta.url), { type: "module" })
  );
  // This callback allows us to report initialization progress
  chat.setInitProgressCallback((report: webllm.InitProgressReport) => {
    setLabel("init-label", Math.round(report.progress * 100));
  });
  async function main() {
    // You can also try out "RedPajama-INCITE-Chat-3B-v1-q4f32_1"
    await chat.reload("RedPajama-INCITE-Chat-3B-v1-q4f32_1");
    console.log("load complete");
    document.querySelector("#progress")?.classList.add("hide");
    document.querySelector("#chat-window-row")?.classList.remove("hide");
    chatReady = true;
  }
  const generateProgressCallback = (_step: number, message: string) => {
    // console.log(_step, message);
  };
  main();
  function createMessageItem(user: boolean, message: ChatMessage) {
    const html = `<div class="message">
    <div class="avatar" style="background-image:url(${message.image}"></div>
    <span class="name">
    ${user ? "Me" : message.name}
  </span>
  <span>${message.message}</span>
  </div>`;
    (document.querySelector("#chat-window") as any).innerHTML += html;
  }
  return (
    <Container fluid className="chat-page page">
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container className="chat-container h-100 flex-column">
            <Row>
              <Col>
                <h1>Chat with {item.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="" id="progress"></div>
              </Col>
            </Row>
            <Row className={"hide"} id="chat-window-row">
              <div id="chat-window"></div>
              <textarea id="message"></textarea>
              <Button
                onClick={async () => {
                  const text = (document.querySelector("#message") as any)
                    ?.value;
                  if (text) {
                    const message: ChatMessage = {
                      name: "user",
                      image: "",
                      message: text,
                      user: true,
                    };
                    messages.push(message);
                    createMessageItem(true, message);
                    const reply0 = await chat.generate(
                      text,
                      generateProgressCallback
                    );
                    const serviceItem = categoryId
                      ? (categoryConfig as any)[categoryId][Number(serviceId)]
                      : null;
                    const replayMessage = {
                      name: serviceItem.name,
                      image: serviceItem.image,
                      message: reply0,
                      user: false,
                    };
                    messages.push(replayMessage);
                    createMessageItem(true, replayMessage);

                    console.log(reply0);
                  }
                }}
              >
                Send
              </Button>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
