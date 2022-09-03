import bgPlaneFrag from './shader/bgPlaneFrag.glsl';
import effectBackFrag from './shader/effectBackFrag.glsl';
import effectFrontFrag from './shader/effectFrontFrag.glsl';
import textPlaneFrag from './shader/textPlaneFrag.glsl';
import vertex from './shader/vertex.glsl';

export const shaders = {
	vertex: vertex,
	bgPlaneFrag: bgPlaneFrag,
	textPlaneFrag: textPlaneFrag,
	effectBackFrag: effectBackFrag,
	effectFrontFrag: effectFrontFrag,
}
