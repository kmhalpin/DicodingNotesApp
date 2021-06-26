const { Kafka } = require('kafkajs');

const ProducerService = {
  kafka: new Kafka({
    clientId: 'notes-producer',
    brokers: process.env.CLOUDKARAFKA_BROKERS.split(','),
    sasl: {
      mechanism: 'scram-sha-256',
      username: process.env.CLOUDKARAFKA_USERNAME,
      password: process.env.CLOUDKARAFKA_PASSWORD,
    },
    ssl: {
      ca: process.env.CLOUDKARAFKA_CA,
    },
  }),
  sendMessage: async (queue, message) => {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic: `${process.env.CLOUDKARAFKA_TOPIC_PREFIX}${queue}`,
      messages: [
        { value: Buffer.from(message) },
      ],
    });
  },
};

module.exports = ProducerService;
