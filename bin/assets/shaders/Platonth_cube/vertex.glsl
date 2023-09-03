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
    // pos = (in_pos * matrW).xyz;
    // gl_Position = in_pos * matrW;

    pos = (vec4(in_pos, 1) * matrWVP).xyz;
    gl_Position = matrWVP * vec4(in_pos, 1);
}