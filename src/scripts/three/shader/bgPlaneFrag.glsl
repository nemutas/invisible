struct Texture {
  sampler2D texture;
  vec2 uvScale;
};

uniform Texture u_contents;
varying vec2 v_uv;

vec4 getTexture(Texture data, vec2 uv) {
  vec2 scaledUv = (uv - 0.5) * data.uvScale + 0.5;
  return texture2D(data.texture, scaledUv);
}

void main() {
  vec4 tex = getTexture(u_contents, v_uv);
  gl_FragColor = tex;
}