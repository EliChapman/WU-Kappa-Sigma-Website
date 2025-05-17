const bgColors = {
    scarlet: 'bg-KS_scarlet',
    gold: 'bg-KS_gold',
    green: 'bg-KS_green'
};

const borderColors = {
    scarlet: 'border-KS_scarlet-100',
    gold: 'border-KS_gold-100',
    green: 'border-KS_green-100',
    black: 'border-black'
};

const textColors = {
    black: 'text-black',
    white: 'text-white'
}

const opacityMap = {
    0: 'opacity-0',
    10: 'opacity-10',
    20: 'opacity-20',
    30: 'opacity-30',
    40: 'opacity-40',
    50: 'opacity-50',
    60: 'opacity-60',
    70: 'opacity-70',
    80: 'opacity-80',
    90: 'opacity-90',
    100: 'opacity-100',
    };

export function FullBanner( {children, color, bannerOpacity=0} ) {

    return(
        <section className={`
            relative
            flex 
            items-center justify-center text-center
            min-h-[40vh] md:min-h-[45vh] 
            border-b-4 shadow-xl
            ${bgColors[color]} ${borderColors[color]}`}>
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black ${opacityMap[bannerOpacity] || 'opacity-0'}`}></div>

            {/* Content */}
            <div className="relative z-10 text-white py-8 max-w-2xl mx-auto">
                {children}
            </div>
        </section>
    )
}

export function PartialBanner( {children, fillColor=null, textColor='', imgURL=null, borderColor='', bannerOpacity=0} ) {

    const backgroundClass = fillColor
  ? bgColors[fillColor]
  : 'bg-cover bg-center';

    const imgStyle = imgURL ? { backgroundImage: `url(${imgURL})` } : {};

    return (
        <section 
            className={`
            relative
            mx-auto
            sm:max-w-screen md:max-w-9/10
            min-h-[25vh] md:min-h-[30vh]
            shadow-xl
            ${backgroundClass}
            border-2 ${borderColors[borderColor]}
            flex items-center justify-center text-center px-4
            `}
            style={imgStyle}
        >
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black ${opacityMap[bannerOpacity]}`} />

            {/* Content */}
            <div className="relative z-10">
                <div className={`${textColors[textColor]}`}>
                    {children}
                </div>
            </div>
        </section>
    );

}