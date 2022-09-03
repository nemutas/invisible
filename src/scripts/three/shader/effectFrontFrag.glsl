uniform sampler2D tDiffuse;
uniform sampler2D u_backEffect;
uniform sampler2D u_simulator;
varying vec2 v_uv;

float PI = 3.141592653589793;

void main() {
  vec2 uv = v_uv;

  vec4 disp = texture2D(u_simulator, v_uv);
  float angle = disp.r * 2.0 * PI;
  vec2 dir = vec2(sin(angle), cos(angle));
  vec2 distortion = dir * disp.r * 0.02;
  uv += distortion;

  vec4 tex = texture2D(tDiffuse, uv);
  tex.rgb += disp.r * 1.4 * tex.a;

  vec4 back = texture2D(u_backEffect, v_uv);
  back.rgb *= 1.0 - tex.a;

  vec4 color = tex + back;
  gl_FragColor = color;
}