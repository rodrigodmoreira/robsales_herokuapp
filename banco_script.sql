-- Drop all
DROP TABLE public.transacao;
DROP TABLE public.avaliacao;
DROP TABLE public.conta;
DROP TABLE public.ordem_compra;
DROP TABLE public.cliente;
DROP TABLE public.doce;
DROP TABLE public.vendedor;
DROP TABLE public.usuario;

DROP SEQUENCE public.cliente_idcliente_seq;
DROP SEQUENCE public.vendedor_idvendedor_seq;
DROP SEQUENCE public.doce_iddoce_seq;
DROP SEQUENCE public.ordem_compra_id_seq;
DROP SEQUENCE public.transacao_seq;


-- Create all
CREATE TABLE public.usuario(
	cpf character varying NOT NULL,
	username character varying NOT NULL,
	password character varying NOT NULL,
	nome character varying NOT NULL,
	reputacao double precision DEFAULT 5,
	CONSTRAINT usuario_pk PRIMARY KEY (cpf)
);

CREATE SEQUENCE public.cliente_idcliente_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

CREATE TABLE public.cliente(
--	idcliente serial NOT NULL,
	idcliente integer NOT NULL DEFAULT nextval('public.cliente_idcliente_seq'::regclass),
	iscliente boolean DEFAULT true,
	cpf_usuario character varying NOT NULL,
	CONSTRAINT cliente_pk PRIMARY KEY (idcliente),
	CONSTRAINT cliente_uq UNIQUE (cpf_usuario),
	CONSTRAINT usuario_fk FOREIGN KEY (cpf_usuario)
		REFERENCES public.usuario (cpf) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE SEQUENCE public.vendedor_idvendedor_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

CREATE TABLE public.vendedor(
--	idvendedor serial NOT NULL,
	idvendedor integer NOT NULL DEFAULT nextval('public.vendedor_idvendedor_seq'::regclass),
	isvendedor boolean DEFAULT false,
	cpf_usuario character varying NOT NULL,
	CONSTRAINT vendedor_pk PRIMARY KEY (idvendedor),
	CONSTRAINT vendedor_uq UNIQUE (cpf_usuario),
	CONSTRAINT usuario_fk FOREIGN KEY (cpf_usuario)
		REFERENCES public.usuario (cpf) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE SEQUENCE public.doce_iddoce_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

CREATE TABLE public.doce(
--	iddoce serial NOT NULL,
	iddoce integer NOT NULL DEFAULT nextval('public.doce_iddoce_seq'::regclass),
	nome character varying NOT NULL,
	descricao character varying,
	valor double precision NOT NULL,
	idvendedor_vendedor integer NOT NULL,
	CONSTRAINT doce_pk PRIMARY KEY (iddoce),
	CONSTRAINT vendedor_fk FOREIGN KEY (idvendedor_vendedor)
		REFERENCES public.vendedor (idvendedor) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE public.conta(
	cod_banco character varying NOT NULL,
	agencia character varying NOT NULL,
	digito_ver character varying NOT NULL,
	num_conta character varying NOT NULL,
	cpf_usuario character varying NOT NULL,
	CONSTRAINT conta_pk PRIMARY KEY (cpf_usuario, num_conta),
	CONSTRAINT usuario_fk FOREIGN KEY (cpf_usuario)
		REFERENCES public.usuario (cpf) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE SEQUENCE public.ordem_compra_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

CREATE TABLE public.ordem_compra(
--	id serial NOT NULL,
	id integer NOT NULL DEFAULT nextval('public.ordem_compra_id_seq'::regclass),
	dia_hora timestamp with time zone NOT NULL DEFAULT now(),
	aprovado boolean DEFAULT false,
	CONSTRAINT ordem_compra_pk PRIMARY KEY (id)
);

CREATE SEQUENCE public.transacao_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START WITH 1
	CACHE 1
	NO CYCLE
	OWNED BY NONE;

CREATE TABLE public.transacao(
	id_transacao integer UNIQUE NOT NULL DEFAULT nextval('public.transacao_seq'::regclass),
	valor double precision NOT NULL,
	quantidade smallint NOT NULL,
	pagamento_efetivado boolean DEFAULT false NOT NULL,
	idcliente_cliente integer NOT NULL,
	idvendedor_vendedor integer NOT NULL,
	iddoce_doce integer NOT NULL,
	id_ordem_compra integer NOT NULL,
	CONSTRAINT transacao_pk PRIMARY KEY (id_transacao, id_ordem_compra, idcliente_cliente, idvendedor_vendedor, iddoce_doce),
	CONSTRAINT ordem_compra_fk FOREIGN KEY (id_ordem_compra)
		REFERENCES public.ordem_compra (id) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT cliente_fk FOREIGN KEY (idcliente_cliente)
		REFERENCES public.cliente (idcliente) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT vendedor_fk FOREIGN KEY (idvendedor_vendedor)
		REFERENCES public.vendedor (idvendedor) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE,
	CONSTRAINT doce_fk FOREIGN KEY (iddoce_doce)
		REFERENCES public.doce (iddoce) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE public.opiniao(
	id_transacao integer NOT NULL,
	nota integer NOT NULL,
	descricao text,
	CONSTRAINT opiniao_pk PRIMARY KEY (id_transacao),
	CONSTRAINT id_transacao_fk FOREIGN KEY (id_transacao)
		REFERENCES public.transacao (id_transacao) MATCH FULL
		ON DELETE RESTRICT ON UPDATE CASCADE
);


-- Inserts

INSERT INTO usuario(cpf,username,password,nome) VALUES('000.000.000-00', 'arthuresm', '123456', 'Arthur Estevao');
INSERT INTO usuario(cpf,username,password,nome) VALUES('000.000.000-01', 'rodrigod', '123456', 'Rodrigo Dias');
INSERT INTO usuario(cpf,username,password,nome) VALUES('000.000.000-02', 'tonincarrara', '123456', 'Antonio Sousa');
INSERT INTO usuario(cpf,username,password,nome) VALUES('000.000.000-03', 'bielalderson', '123456', 'Gabriel Nogueiras');
INSERT INTO usuario(cpf,username,password,nome) VALUES('000.000.000-04', 'viruz', '123456', 'Matheus Coelho');

INSERT INTO vendedor(cpf_usuario) VALUES('000.000.000-00');
UPDATE vendedor SET isvendedor = true WHERE cpf_usuario = '000.000.000-00';

INSERT INTO doce(nome, descricao, valor, idvendedor_vendedor) VALUES('Bombom de chocolate', 'Melhor bombom do CEFET-MG', 2, 1);
INSERT INTO doce(nome, descricao, valor, idvendedor_vendedor) VALUES('Bombom de creme', 'Segundo Melhor bombom do CEFET-MG', 2, 1);
INSERT INTO doce(nome, descricao, valor, idvendedor_vendedor) VALUES('Bombom de negresco', 'Terceiro Melhor bombom do CEFET-MG', 2, 1);
INSERT INTO doce(nome, descricao, valor, idvendedor_vendedor) VALUES('Bombom de maracujá', 'Quarto Melhor bombom do CEFET-MG', 2, 1);

INSERT INTO cliente(cpf_usuario) VALUES('000.000.000-01');
INSERT INTO cliente(cpf_usuario) VALUES('000.000.000-02');
INSERT INTO cliente(cpf_usuario) VALUES('000.000.000-03');
INSERT INTO cliente(cpf_usuario) VALUES('000.000.000-04');

INSERT INTO conta(cod_banco, agencia, digito_ver, num_conta, cpf_usuario) VALUES('033', '6023', '3', '1597380', '000.000.000-00');
INSERT INTO conta(cod_banco, agencia, digito_ver, num_conta, cpf_usuario) VALUES('033', '6023', '3', '1597381', '000.000.000-01');
INSERT INTO conta(cod_banco, agencia, digito_ver, num_conta, cpf_usuario) VALUES('033', '6023', '4', '1597382', '000.000.000-02');
INSERT INTO conta(cod_banco, agencia, digito_ver, num_conta, cpf_usuario) VALUES('033', '6023', '1', '1597383', '000.000.000-03');
INSERT INTO conta(cod_banco, agencia, digito_ver, num_conta, cpf_usuario) VALUES('033', '6023', '3', '1597310', '000.000.000-04');

INSERT INTO ordem_compra DEFAULT VALUES;

INSERT INTO transacao(valor, quantidade, idcliente_cliente, idvendedor_vendedor, iddoce_doce, id_ordem_compra) VALUES(2, 4, 2, 1, 1, 1);
INSERT INTO transacao(valor, quantidade, idcliente_cliente, idvendedor_vendedor, iddoce_doce, id_ordem_compra) VALUES(2, 3, 3, 1, 1, 1);
