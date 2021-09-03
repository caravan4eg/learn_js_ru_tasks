function maxSum(root) {
    if (!root) return 0;
    let maxLeft = maxSum(root.left);
    let maxRight = maxSum(root.right);

    return root.value + Math.max(maxLeft + maxRight);
}

