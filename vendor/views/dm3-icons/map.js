function(doc) {

    // !code lib/helpers/helpers.js

    if (doc.type == "Topic" && doc.topic_type == "Icon") {
        for (var attachment in doc._attachments) {
            emit(doc._id, {label: topic_label(), src: attachment})
        }
    }
}
