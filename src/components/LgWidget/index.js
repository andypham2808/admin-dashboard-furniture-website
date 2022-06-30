/** @format */

import React from "react";
import { lastTransctionRows } from "../../data";
import {
  LgWidgetContainer,
  LgWidgetTitle,
  LgWidgetTable,
  LgWidgetTh,
  LgWidgetUser,
  LgWidgetImg,
  LightTd,
  LgWidgetButton,
} from "./LgWidgetElements";

const LgWidget = () => {
  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Last Transaction</LgWidgetTitle>
      <LgWidgetTable>
        <tr>
          <LgWidgetTh>Customer</LgWidgetTh>
          <LgWidgetTh>Date</LgWidgetTh>
          <LgWidgetTh>Amount</LgWidgetTh>
          <LgWidgetTh>Status</LgWidgetTh>
        </tr>
        {lastTransctionRows &&
          lastTransctionRows.map((item) => (
            <tr key={item.id}>
              <LgWidgetUser>
                <LgWidgetImg src={item.avatar} alt={item.username} />
                <span>{item.username}</span>
              </LgWidgetUser>
              <LightTd>{item.date}</LightTd>
              <LightTd>{item.transaction}</LightTd>
              <td>
                <LgWidgetButton bgColor={item.bgColor} fdColor={item.fdColor}>
                  {item.type}
                </LgWidgetButton>
              </td>
            </tr>
          ))}
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};

export default LgWidget;
