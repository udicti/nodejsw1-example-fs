/**
 *
 * @param uis {string}
 */
function appUi(uis) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Yep</title>
    <link href="https://unpkg.com/bfastjs">
</head>
<body>
${uis}
</body>
</html>

    `
}


exports.appUi = appUi;
