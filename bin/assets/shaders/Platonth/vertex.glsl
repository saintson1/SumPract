#version 300 es

in vec3 in_pos;
out vec3 pos;

uniform Matrixes {
    mat4 matrVP;
    mat4 matrW;
    mat4 matrWInv;
    mat4 matrWVP;
};

void main(void) {
  pos = (vec4(in_pos, 1) * matrW).xyz;
  gl_Position = vec4(in_pos, 1) * matrW;
  
  pos = (vec4(in_pos, 1) * matrWVP).xyz;
  gl_Position = matrWVP * vec4(in_pos, 1);
}