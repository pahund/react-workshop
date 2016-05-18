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
    it("shows its children when clicked", () => {
        const topic = shallow(<Topic subject="foo"><p>bar</p></Topic>);
        topic.should.not.contain(<p>bar</p>)
        topic.find("h1").simulate("click");
        topic.should.contain(<p>bar</p>)
    })
});
