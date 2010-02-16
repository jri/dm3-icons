function(doc) {

    if (doc.type == "Topic" && doc.topic_type == "Icon") {
        for (var attachment in doc._attachments) {
            emit(attachment, null)
        }
    }
}
