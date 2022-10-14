import React from 'react';
import AnimatedPage from '../components/AnimatedPage/AnimatedPage';

const Comments = ()=>{
    const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);

    if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
    return(
        <AnimatedPage>
            Página Comments
        </AnimatedPage>
    )
}
export default Comments;