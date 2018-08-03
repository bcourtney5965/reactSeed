import React from 'react';
import { sum, Foo } from './sum';
import Enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).to.equal(3);
});

describe('<Foo />', () => {
  it('renders the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain('unique');
  });
});
