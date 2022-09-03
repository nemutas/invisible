uniform sampler2D tDiffuse;
uniform sampler2D u_simulator;
varying vec2 v_uv;

float PI = 3.141592653589793;

void main() {
  vec2 uv = v_uv;

  vec4 disp = texture2D(u_simulator, v_uv);
  float angle = disp.r * 2.0 * PI;
  vec2 dir = vec2(sin(angle), cos(angle));
  vec2 distortion = dir * disp.r * 0.05;
  uv += distortion;

  vec4 tex = texture2D(tDiffuse, uv);
  float a = disp.r * 1.4;

  gl_FragColor = vec4(tex.rgb * a, a);
}