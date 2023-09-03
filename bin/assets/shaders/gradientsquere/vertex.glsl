#version 300 es

in highp vec4 in_pos;
out highp vec3 drawColor;

uniform Matrixes {
    mat4 matrVP;
    mat4 matrW;
    mat4 matrWInv;
    mat4 matrWVP;
};

void main( void ) {
    drawColor = in_pos.xyz;
    gl_Position = in_pos;
}