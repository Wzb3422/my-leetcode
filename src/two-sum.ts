

export function twoSum(nums: number[], target: number): number[] {
    const recorded = new Map();

    for (let index = 0; index < nums.length; index++) {
        debugger;
        const current = nums[index];
        const remaining = target - current;
        if (recorded.has(remaining)) {
            return [index, recorded.get(remaining)];
        }
        recorded.set(current, index);
    }

    return [];
};