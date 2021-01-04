import Square from './Square';
import React from 'react'
import { shallow, mount } from 'enzyme';

it('should call function onclick', () => {
  const onClick = jest.fn();
  let wrapper = mount(<Square onClick={onClick}/>);
  wrapper.find('button').first().simulate('click');
  expect(onClick).toBeCalledTimes(1)
});