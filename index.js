const gifs = {
  log: [

  ],
  error: [

  ],
  warn: [

  ]
};

const parse_args = (...args) => {
  let string = '';
  for (let arg of args) {
    // arg is String
    if (typeof arg === 'string' || arg instanceof String) {
      string += arg + ' ';
    }
    // arg is Function
    else if (!!(arg && arg.constructor && arg.call && arg.apply)) {
      string += '\n' + arg.toString() + '\n';
    }
    // arg is Object
    else if (arg === Object(arg)) {
      string += '\n' + JSON.stringify(arg, null, 2) + '\n';
    }
    // anythin else
    else {
      string += JSON.stringify(arg, null, 2) + ' ';
    }
  }
  return string;
};

const render = (text, gif_url) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.setAttribute('crossOrigin','anonymous');

  image.addEventListener('load', () => {
    canvas.width = image.width;
    canvas.height = image.height;
    
    ctx.font = "normal 20px Consolas";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000";
  
    let x = 30;
    let y = 30;
    const tokens = text.split('\n');
    for (let token of tokens) {
      if (token[0] == '"') {
        token = token.substring(1);
      }
      if (token[token.length - 1] == '"') {
        token = token.substring(0, token.length - 1);
      } 
      ctx.strokeText(token, x, y);
      ctx.fillText(token, x, y);
      y += 25;
    }
    
    console.log("%c+", `font-size: 1px; padding: ${image.height/2}px ${image.width/2}px; background: url(${canvas.toDataURL()}), url(${gif_url}); background-repeat: no-repeat; background-size: ${image.width}px ${image.height}px; color: transparent;`);
  });
  image.src = gif_url;
};

const koulis = {
  log: (...args) => {
    render(parse_args(...args), 'https://media1.tenor.com/images/4945fb552b4066ff6c1785f99d7241c8/tenor.gif');
  },
  error: (...args) => {
    render(parse_args(...args), 'https://media1.tenor.com/images/4945fb552b4066ff6c1785f99d7241c8/tenor.gif');
  },
  warn: (...args) => {
    render(parse_args(...args), 'https://media1.tenor.com/images/4945fb552b4066ff6c1785f99d7241c8/tenor.gif');
  }
};

export { koulis };