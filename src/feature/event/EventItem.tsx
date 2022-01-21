import { useState } from 'react';

function EventItem() {
    const [isAttending, setIsAttending] = useState(false);

    return (
        <div>
            <button onClick={() => setIsAttending(!isAttending)}>
                {isAttending ? 'attending' : 'attend'}
            </button>
        </div>
    );
}

export default EventItem;
