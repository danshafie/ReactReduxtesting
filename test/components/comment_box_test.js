import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';



describe('CommentBox', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  })

  it('has the class comment-box', () => {
    const component = renderComponent(CommentBox);

    expect(component).to.have.class('comment-box');
  })

  it('has a text area', () => {
    const component = renderComponent(CommentBox);

    expect(component.find('textarea')).to.exist
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);

    expect(component.find('button')).to.exist
  });

describe('Entering text', () => {

  beforeEach(() => {
    component.find('textarea').simulate('change', 'new comment');
  })

  it('shows text in textarea', () => {
    expect(component.find('textarea')).to.have.value('new comment');
  })

  it('clears text when submitted', () => {
    component.simulate('submit');
    expect(component.find('textarea')).to.have.value('');
  })
})

})
