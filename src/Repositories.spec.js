import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

import { expect } from 'chai';

import Repositories from './Repositories';
import Repository from './Repository';

const repos = [
  {
    id: 1,
    stargazers_count: 2,
    url: 'www.google.com/1',
    name: 'best_repo_ever',
    language: 'javascript',
  },
  {
    id: 2,
    stargazers_count: 17,
    url: 'www.google.com/2',
    name: 'even_better_repo',
    language: 'C#',
  },
  {
    id: 3,
    stargazers_count: 4,
    url: 'www.google.com/3',
    name: 'ok_repo',
    language: 'pascal',
  },
  {
    id: 4,
    stargazers_count: 0,
    url: 'www.google.com/4',
    name: 'new_repo',
    language: 'c++',
  },
];

describe('<Repositories />', () => {
  it('should render number of repos specified by top prop', () => {
    const wrapper = shallow(<Repositories repositories={repos} top={2} />);
    expect(wrapper.find(Repository)).to.have.length(2);
  });
});
