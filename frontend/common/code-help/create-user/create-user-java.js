module.exports = (
  envId,
  { FEATURE_NAME, FEATURE_NAME_ALT, LIB_NAME, LIB_NAME_JAVA },
  userId,
) => `${LIB_NAME_JAVA} ${LIB_NAME} = ${LIB_NAME_JAVA}
    .newBuilder()
    .setApiKey("${envId}")
    .build();

// Identify the user
Flags flags = flagsmith.getIdentityFlags("${userId}");

// get the state / value of the user's flags 
Boolean isEnabled = flags.isFeatureEnabled("${FEATURE_NAME}");
Object featureValue = flags.getFeatureValue("${FEATURE_NAME_ALT}");
`
