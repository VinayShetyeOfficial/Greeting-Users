const period = () => {
    const hrs = new Date().getHours()
    return hrs > 4 ? ( hrs < 12 ? "Morning" : ( hrs < 17 ? "Afternoon" : "Evening")) : "Night"
}

export {period}

