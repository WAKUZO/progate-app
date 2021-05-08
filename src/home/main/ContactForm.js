import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 送信完了のstate
      isSubmitted: false,
      email: '',
      // メールのエラーメッセージ
      hasEmailError: false,
      /* contentとhasContentErrorというstateを追加してください */
      content: "",
      // 内容のエラーメッセージ
      hasContentError: false
    };
  }

  // メールアドレスの入力の更新
  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  /* handleContentChangeという名前のメソッドを定義してください */
  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === ""
    this.setState(
      {
        content: inputValue,
        hasContentError: isEmpty,
      }
    );
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {

    // メールのエラーメッセージの条件分岐
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }

    // 内容のエラーメッセージの条件分岐
    let contentErrorText;
    /* hasContentErrorを条件にしたif文を作成してください */
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
      )
    }

    // 送信完了の条件分岐
    let contactForm;

    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => { this.handleSubmit() }} >
          <p>メールアドレス（必須）</p>
          <input
            value={this.state.email}
            onChange={(event) => { this.handleEmailChange(event) }}
          />
          {emailErrorText}
          <p>お問い合わせ内容（必須）</p>
          {/* stateのvalueの値と、onChangeイベントを追加してください */}
          <textarea
            value={this.state.content}
            onChange={(event) => { this.handleContentChange(event) }
            }
          />
          {/* contentErrorTextを表示してください */}
          {contentErrorText}

          <input
            type='submit'
            value='送信'
          />
        </form>
      );
    }

    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
