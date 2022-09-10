import { useState, useEffect } from 'react'

export const useTempUnit = () => {
    const [unitMode, setUnitMode] = useState(false)

    const unitModeChanged = (mode: boolean) => {
        if (mode !== unitMode) {
            setUnitMode(mode)
            localStorage.setItem('unit', String(mode))
        }
    }

    useEffect(() => {
        const unit = localStorage.getItem('unit')
        if (unit && JSON.parse(unit)) {
            setUnitMode(!unitMode)
        } else {
            localStorage.setItem('unit', String(unitMode))
        }
    }, [])

    return [unitMode, unitModeChanged] as const
}
