const gifs = [
  'https://media1.tenor.com/images/4945fb552b4066ff6c1785f99d7241c8/tenor.gif',
  'https://media1.tenor.com/images/f8ebbeae621b9e51accc8772860af68c/tenor.gif',
  'https://media1.tenor.com/images/b67e6cf1febcd2fed0d65e944f787585/tenor.gif',
  'https://thumbs.gfycat.com/SnarlingChiefAbalone-size_restricted.gif',
  'https://media1.tenor.com/images/46b748d4e3f40ab5cbc2d4899417aa70/tenor.gif',
  'https://media1.tenor.com/images/74d653d21c14f4b208d7c9bb540a6b37/tenor.gif?itemid=15137029',
  'https://media.giphy.com/media/3ohhwMEQJY5zRiWOWY/giphy.gif',
];

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
    
    const font_size = image.width / 30;
    ctx.font = `normal ${font_size}px Consolas`;
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
    render(parse_args(...args), gifs[Math.floor((Math.random() * gifs.length))]);
  }
};

export { koulis };