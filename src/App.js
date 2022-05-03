import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from 'history';

import deployment from './deployment.png';

const defaultHistory = createBrowserHistory();

function App(props) {
  return (
    <Router history={props.history || defaultHistory}>
        <div className="content-page">
          <h2>Các khái niệm</h2>
          <h3>Khái niệm microservices</h3>
          <p>
          Theo cách mô tả đơn giản và ngắn gọn nhất về microservices, nó là một cách phát triển cho phép các developers develop và deploy độc lập các thành phần của một platform mà không làm ảnh hưởng tới các thành phần khác. Microservices cung cấp khả năng triển khai các module độc lập cho phép chúng ta xây dựng các service tách biệt và dễ dàng thay đổi. Nguyên tắc hàng đầu khi triển khai microservices là: mỗi service chỉ có một nhiệm vụ duy nhất và đảm bảo là nó không quá bự.
          </p>
          <h3>Khái niệm micro frontend</h3>
          <p>
          Ý tưởng đằng sau cụm từ micro frontends là sự phân chia web app ra thành nhiều nhóm thành phần riêng biệt và được phát triển bởi các team độc lập, mỗi team có một nhiệm vụ khác nhau. Khái niệm micro frontend được lấy cảm hứng và được đặt tên theo microservices.
          </p>
          <img src={'http://localhost:3001' + deployment} alt="deployment"/>
        </div>
    </Router>
  );
}

export default App;
