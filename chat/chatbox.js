let chatInput = document.querySelector('#chat_input');
let typing = document.querySelector('#typing');
let send = document.querySelector('#send');
let chatMessages = document.querySelector('#chat_messages');
let chatBoxBody = document.querySelector('#chat_box_body');

// ----- EVENTS ----- //

chatInput.addEventListener('input', function () {
  this.style.height = '0';
  this.style.height = this.scrollHeight + 1 + 'px';
});

chatInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 13 && !evt.shiftKey) {
    sendMessage('my', this);
    evt.preventDefault();
  }
});

send.addEventListener('click', function () {
  sendMessage('my', chatInput);
});

// ----- FUNCTIONS -----//

function renderProfile(p) {
  return (
    '<div class="profile ' +
    p +
    '-profile hide"><img src="' +
    profile[p].pic +
    '" alt="' +
    profile[p].name +
    '" width="30" height="30" />&nbsp;<span>' +
    profile[p].name +
    '</span></div>'
  );
}

function renderMessage(p, m) {
  return '<div class="message ' + p + '-message hide">' + m + '</div>';
}

function appendMessage(r) {
  chatMessages.insertAdjacentHTML('beforeend', r);

  let elms = document.querySelectorAll('.profile.hide, .message.hide');

  for (let i = 0; i < elms.length; i++) {
    // if (elms[i].classList.contains('profile')) {
    //   elms[i].style.height = elms[i].scrollHeight + 'px';
    // } else {
    //   elms[i].style.height = elms[i].scrollHeight - 20 + 'px';
    // }

    elms[i].classList.remove('hide');
  }

  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}

function sendMessage(p, elm) {
  let r = '';

  if (chatThread[chatThread.length - 1].profile !== p) {
    r += renderProfile(p);
  }

  if (typeof elm === 'string') {
    r += renderMessage(p, elm);

    chatThread.push({
      profile: p,
      message: elm,
    });
  } else {
    r += renderMessage(p, elm.value);

    chatThread.push({
      profile: p,
      message: elm.value,
    });

    elm.value = '';
  }

  appendMessage(r);
}

chatBoxBody.scrollTop = chatBoxBody.scrollHeight;

// ---------- Example ---------- //

let profile = {
  my: {
    name: 'My profile',
    pic: 'https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619',
  },
  other: {
    name: 'Other profile',
    pic: 'https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed',
  },
};

let chatThread = [
  {
    profile: 'other',
    message: 'Hello!',
  },
  {
    profile: 'my',
    message: 'Hi!',
  },
  {
    profile: 'my',
    message: 'How are you?',
  },
];
