class GoogleDriveUtils {
  static extractFileId(link) {
    // Regex pattern to match Google Drive file ID
    const pattern =
      /(?:\/d\/|id=|\/file\/d\/|\/open\?id=|\/uc\?id=|\/view\?id=)([\w-]{25,})/;
    const match = link.match(pattern);
    if (match) {
      return match[1]; // Return only the file ID
    } else {
      throw new Error("Invalid Google Drive link: Unable to extract file ID");
    }
  }
}

// Example usage:
try {
  const fileId = GoogleDriveUtils.extractFileId(
    "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J/view?usp=sharing"
  );
  console.log(fileId); // Outputs the file ID directly
} catch (error) {
  console.error(error.message);
}

export { GoogleDriveUtils };
