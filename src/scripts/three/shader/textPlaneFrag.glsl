uniform sampler2D u_texture;
varying vec2 v_uv;

void main() {
  vec4 tex = texture2D(u_texture, v_uv);
  gl_FragColor = tex;
}