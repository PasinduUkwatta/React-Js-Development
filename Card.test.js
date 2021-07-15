import Enzyme, {shallow,mount,render} from "enzyme"
import Card from "./Card";
import React from "react";
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() })

it('expect to render card component', function () {
    expect(shallow(<Card/>)).toEqual(1)
});
