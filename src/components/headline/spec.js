import React from "react";
import { shallow } from "enzyme";
import Headline from "./index.js";

import { findByTestAtr } from "./../../../Utils";

const setUp = props => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a <h1>", () => {
      const wrapper = findByTestAtr(component, "header");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a desc", () => {
      const wrapper = findByTestAtr(component, "desc");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should not render", () => {
      const wrapper = findByTestAtr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
