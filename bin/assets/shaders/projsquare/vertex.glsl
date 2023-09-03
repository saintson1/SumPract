#version 300 es

in highp vec3 in_pos;
out highp vec3 pos;

uniform Matrixes {
    highp mat4 matrVP;
    highp mat4 matrW;
    highp mat4 matrWInv;
    highp mat4 matrWVP;
};

void main(void) {
    pos = (vec4(in_pos, 1) * matrWVP).xyz;
    gl_Position = vec4(in_pos, 1);
}