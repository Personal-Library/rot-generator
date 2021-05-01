<template>
	<IntroSection />
	<RotCreateSection />
	<RotAnalyzerSection />
	<RotDescriptionSection />
</template>

<script>
import IntroSection from '../components/IntroSection';
import RotCreateSection from '../components/RotCreateSection';
import RotAnalyzerSection from '../components/RotAnalyzerSection';
import RotDescriptionSection from '../components/RotDescriptionSection';

export default {
	components: {
		IntroSection,
		RotCreateSection,
		RotAnalyzerSection,
		RotDescriptionSection,
	},
};
</script>
