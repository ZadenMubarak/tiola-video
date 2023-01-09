const conversation = await client.conversations.newConversation(
    otherProfile.ownedBy,
    {
      conversationId: buildConversationId(myProfile.id, otherProfile.id),
      metadata: {},
    }
  )

export default  await conversation.send('gm');