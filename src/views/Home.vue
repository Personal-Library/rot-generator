<template>
	<IntroSection />
	<RotSection />
	<RotAnalyzerSection />
	<RotDescriptionSection />
</template>

<script>
import IntroSection from '../components/IntroSection';
import RotSection from '../components/RotSection';
import RotAnalyzerSection from '../components/RotAnalyzerSection';
import RotDescriptionSection from '../components/RotDescriptionSection';

export default {
	components: {
		IntroSection,
		RotSection,
		RotAnalyzerSection,
		RotDescriptionSection,
	},
};
</script>
