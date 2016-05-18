import React from "react";
import Topic from "../../src/components/Topic";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import { shallow } from "enzyme";

chai.should();
chai.use(chaiEnzyme());

describe("<Topic>", () => {
    it("renders a <article> element", () => {
        const topic = shallow(<Topic />);
        topic.should.have.tagName("article");
    });
});
