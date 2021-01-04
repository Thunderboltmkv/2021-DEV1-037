import { render, screen } from '@testing-library/react';
import Square from '../Square/Square';
import React from 'react'
import { shallow, mount } from 'enzyme';
import Board from "../Board/Board";

it('should renders 9 square', () => {
  
  const wrapper = mount(<Board />);
  const firstButton = wrapper.find('.square');
  expect(firstButton).toHaveLength(9);
});

it("should start with X and stays X when clicking the same square", () => {
  const wrapper = mount(<Board />);
  const firstButton = wrapper.find(".square").at(1);
  firstButton.simulate('click');
  expect(firstButton.text()).toBe("X");
  firstButton.simulate('click');
  expect(firstButton.text()).toBe("X");

});

it("should mark next to O", () => {
  const wrapper = mount(<Board />);
  const status = wrapper.find(".status");
  const firstButton = wrapper.find(".square").at(0);
  const secondButton = wrapper.find(".square").at(1);
  
  expect(status.text()).toBe("Next player : X");
  firstButton.simulate('click');
  expect(status.text()).toBe("Next player : O");
  secondButton.simulate('click');
  expect(status.text()).toBe("Next player : X");
  expect(firstButton.text()).toBe("X");
  expect(secondButton.text()).toBe("O");
});


it("should make player 2 wins", () => {
  const wrapper = mount(<Board />);
  const status = wrapper.find(".status");
  const firstButton = wrapper.find(".square").at(0);
  const secondButton = wrapper.find(".square").at(1);
  const thirdButton = wrapper.find(".square").at(2);
  const fifthButton = wrapper.find(".square").at(4);
  const lastButton = wrapper.find(".square").at(8);
  const eighthButton = wrapper.find(".square").at(7);
  
  firstButton.simulate('click');
  secondButton.simulate('click');
  thirdButton.simulate('click');
  fifthButton.simulate('click');
  lastButton.simulate('click');
  eighthButton.simulate('click');
  expect(status.text()).toBe("O won");
});

it("should make a draw", () => {
  const wrapper = mount(<Board />);
  const status = wrapper.find(".status");
  const firstButton = wrapper.find(".square").at(0);
  const secondButton = wrapper.find(".square").at(1);
  const thirdButton = wrapper.find(".square").at(2);
  const fourthButton = wrapper.find(".square").at(3);
  const fifthButton = wrapper.find(".square").at(4);
  const sixthButton = wrapper.find(".square").at(5);
  const seventhButton = wrapper.find(".square").at(6);
  const eighthButton = wrapper.find(".square").at(7);
  const lastButton = wrapper.find(".square").at(8);
  
  firstButton.simulate('click');
  secondButton.simulate('click');
  thirdButton.simulate('click');
  fourthButton.simulate('click');
  seventhButton.simulate('click');
  fifthButton.simulate('click');
  sixthButton.simulate('click');
  lastButton.simulate('click');
  eighthButton.simulate('click');
  expect(status.text()).toBe("Draw");
});

it('should call function onclick', () => {
  const onClick = jest.fn();
  let wrapper = mount(<Board onClick={onClick}/>);
  wrapper.find('div').first().simulate('click');
  expect(onClick).toBeCalledTimes(0)
});