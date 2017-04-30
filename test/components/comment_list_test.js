import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
  let component;
  
  beforeEach(() => {
    const props = { comments: ['New comment', 'More new comment']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows and LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New comment')
    expect(component).to.contain('More new comment')
  });
});