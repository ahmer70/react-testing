import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";


const setup=(props={})=>{
    const component=shallow(<Header {...props}/>)

    return component
}
describe('Header Components',()=>{
    let component;

    beforeEach(()=>{
        component=setup()
    })

    it('shoud render',()=>{
        const wrapper=component.find(".header-class")
        expect(wrapper.length).toBe(1)
    })
})