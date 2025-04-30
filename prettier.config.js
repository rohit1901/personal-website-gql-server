module.exports = {
    // Specify the file extensions to format
    overrides: [
      {
        files: "*.ts",
        options: {
          semi: true,
          singleQuote: true,
          trailingComma: "all",
          tabWidth: 2,
          printWidth: 80,
        },
      },
    ],
  };